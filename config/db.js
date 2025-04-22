import { connect } from "mongoose"

export const connectDB = () => {
    connect(process.env.DB_URI || "mongodb://localhost:27017/library")

    .then(() => console.log("mongoDB connected"))
    .catch((err) => {console.log("cannot connect db", err)
    process.exit(1)}
    );
};
