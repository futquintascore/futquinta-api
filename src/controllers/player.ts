/* eslint-disable @typescript-eslint/no-explicit-any */
import { player } from '../services/prismaClient';
import { Request, Response } from 'express';

//Read all users
export async function index(req: Request, res: Response) {
  try {
    const players = await player.findMany();

    res.status(201).json(players);
  } catch (e) {
    res.status(400).json('bad request');
  }
}
//Show one user
export async function show(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const onePlayer = await player.findUnique({
      where: { id: Number(id) },
      include: { games: true },
    });

    if (!onePlayer) {
      throw new Error('can`t find user with this id');
    }

    res.status(201).json(onePlayer);
  } catch (e: any) {
    res.status(400).json(e.message);
  }
}
//Create an user
export async function create(req: Request, res: Response) {
  try {
    const newPlayer = await player.create({
      data: {
        name: 'Bruno',
        goals: 6,
        assists: 8,
        wins: 3,
        loses: 1,
        record: 90,
        position: 'Atacante',
      },
    });

    res.status(201).json(`O jogador ${newPlayer.name} foi criado com sucesso`);
  } catch (e) {}
}

//Update a user
export async function update(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;
  try {
    if (!id) {
      throw new Error('missing id');
    }

    const updatedPlayer = await player.update({
      where: {
        id: Number(id),
      },
      data,
    });
    res
      .status(201)
      .json(`O jogador ${updatedPlayer.name} foi atualizado com sucesso`);
  } catch (e) {
    res.status(400).json(['bad request']);
  }
}

//Delete a user
export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;
  try {
    if (!id) {
      throw new Error('missing id');
    }

    const deletedPlayer = await player.delete({
      where: {
        id: Number(id),
      },
    });
    res
      .status(201)
      .json(`O jogador ${deletedPlayer.name} foi atualizado com sucesso`);
  } catch (e) {
    res.status(400).json(['bad request']);
  }
}
