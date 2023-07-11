import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  switch (method) {
    case "GET": {
      // Get data
      res.status(200).json({ message: "Hello from Dashboard!" });
      break;
    }

    case "POST": {
      // Post data
      res.status(200).json({ message: "POST successful!" });
      break;
    }

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} not allowed`);
  }
}
