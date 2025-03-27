import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.NEXTAUTH_SECRET || "your-secret-key"; // Use env variable

export const generateToken = (userId: string, userEmail: string) => {
  return jwt.sign(
        { id: userId, email: userEmail },
        process.env.NEXTAUTH_SECRET as string,
        { expiresIn: "1m" }
      );
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
};
