import bcrypt from 'bcryptjs';
async function hashPassword(rawData: string): Promise<string> {
  const password = await bcrypt.hash(rawData, 10);

  return password;
}

export { hashPassword };
