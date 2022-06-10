import { firebaseConfig } from "config/firebase";
import { NextApiRequest, NextApiResponse } from "next";

const handleConfigAPI = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    // Process a POST request - Example:
    res.status(200).json({ message: "OK", data: { config: firebaseConfig } });
  } else {
  }
};

export default handleConfigAPI;
