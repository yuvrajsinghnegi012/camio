import express from "express";
import { StreamClient } from '@stream-io/node-sdk';

export const failureFunc = (res, message, statusCode) => {
    return res.status(statusCode).json({
        success: false,
        message,
    })
}

const router = express.Router();

router.get("/token/:id", async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return failureFunc(res, "id not provided", 401);
        }

        const STREAM_API_KEY = process.env.STREAM_API_KEY;
        const STREAM_API_SECRET = process.env.STREAM_SECRET_KEY;

        if (!STREAM_API_KEY) {
            return failureFunc(res, "Stream API key secret is missing", 401);
        }
        if (!STREAM_API_SECRET) {
            return failureFunc(res, "Stream secret key secret is missing", 401);
        }

        // Making Client
        const streamClient = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);

        if (!streamClient) {
            return failureFunc(res, "Error occured white creating client", 401);
        }

        const expirationTime = Math.round(new Date().getTime() / 1000) + 60 * 60;
        const issuedAt = Math.floor(Date.now() / 1000) - 60;

        const token = streamClient.createToken(id, expirationTime, issuedAt);

        return res.status(200).json({
            success: true,
            message: "Token generated",
            token,
        });
    }
    catch (err) {
        return failureFunc(res, err.message || "Something went wrong", 401);
    }
})

export default router;
