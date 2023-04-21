const express = require('express');
const ExpressError = require('./errors')
const { getMedian, numCount, getMode } = require('./functions.js')

const app = express();

app.use(express.json())

app.get("/mean", (req, res, next) => {    
    try {
        if (Object.keys(req.query).length == 0) {
            throw new ExpressError('Numbers are required', 400)
        }

        const numStr = req.query.nums.split(',');
        const nums = numStr.map(Number);
        const nanIdx = nums.findIndex(n => Number.isNaN(n));

        if (nanIdx != -1) {
            throw new ExpressError(`${numStr[nanIdx]} is not a number`, 400)
        }

        const rawMean = nums.reduce((a,b) => a + b, 0) / nums.length
        const mean = Math.round((rawMean + Number.EPSILON) * 100) / 100;
        const output = {
            'operation': 'mean',
            'value': mean
        }
        return res.json(output);
    
    } catch(err) {
        next(err)
    }
})

app.get("/median", (req, res, next) => {
    try {
        if (Object.keys(req.query).length == 0) {
            throw new ExpressError('Numbers are required', 400)
        }

        const numStr = req.query.nums.split(',');
        const nums = numStr.map(Number);
        const nanIdx = nums.findIndex(n => Number.isNaN(n));

        if (nanIdx != -1) {
            throw new ExpressError(`${numStr[nanIdx]} is not a number`, 400)
        }

        const median = getMedian(nums)

        const output = {
            'operation': 'median',
            'value': median
        }
        return res.json(output);
    
    } catch(err) {
        next(err)
    }
})

app.get("/mode", (req, res, next) => {
    try {
        if (Object.keys(req.query).length == 0) {
            throw new ExpressError('Numbers are required', 400)
        }

        const numStr = req.query.nums.split(',');
        const nums = numStr.map(Number);
        const nanIdx = nums.findIndex(n => Number.isNaN(n));

        if (nanIdx != -1) {
            throw new ExpressError(`${numStr[nanIdx]} is not a number`, 400)
        }

        const count = numCount(nums)
        const mode = getMode(count)
        const output = {
            'operation': 'mode',
            'value': mode.length === 1 ? mode[0] : mode 
        }
        return res.json(output);
    
    } catch(err) {
        next(err)
    }
})


app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404)
    next(e)
  })
  
app.use(function (err, req, res, next) {
    let status = err.status || 500;
    let message = err.msg;
  
    return res.status(status).json({
        error: {message, status}
    });
});
  
app.listen(3000, () => {
    console.log("Server running on port 3000")
});