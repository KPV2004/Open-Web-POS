import { NextApiRequest, NextApiResponse } from "next";
import { verifyToken } from "@/utils/auth";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  const decoded = verifyToken(token);
  if (!decoded) return res.status(403).json({ message: "Forbidden" });

  return res.json({ message: "Protected content", userId: decoded.userId });
}
