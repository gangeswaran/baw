const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PlacesRouter = require('./router/place_router');
const userRouter = require('./router/users_router');
const PaymentRouter = require('./router/payment');
const ProfileRouter = require('./router/profile');
require('dotenv').config();
const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(cors());
app.use("/", userRouter);
app.use("/", PlacesRouter);
app.use("/",PaymentRouter);
app.use("/", ProfileRouter);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to the database');
})
.catch((err) => {
    console.error('Error connecting to the database', err);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
