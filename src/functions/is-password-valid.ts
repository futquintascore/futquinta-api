import bcrypt from 'bcryptjs';
async function isPasswordValid(password: string, rawPassword: string): Promise<boolean> {
  const isValid = await bcrypt.compare(rawPassword, password);

  return isValid;
}

export { isPasswordValid };
