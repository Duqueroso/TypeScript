// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  age: number;
};

type responseData = {
  users: Data[]
};

const users: Data[] = [
    { name: "Juan", age: 30 },
    { name: "María", age: 25 },
    { name: "Pedro", age: 35 },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<responseData>,
) {
  res.status(200).json({ users: users });
}
