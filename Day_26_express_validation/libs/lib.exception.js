class Error404 extends Error {
    constructor(message) {
        super(message);
        this.name = "Error404"
    }
}

class Error401 extends Error {
    constructor(message) {
        super(message);
        this.name = "Error401"
    }
}

const ExceptionHandler = (error, res) => {
    switch(error.name){
        case "MongoServerError":
            return res.status(500).json({ detail: error.message})
        case "CastError":
            return res.status(500).json({ detail: "Invalid format"})
        case "Error404":
            return res.status(404).json({ detail: error.message || "Data not found"})
        case "Error403":
            return res.status(403).json({ detail: error.message || "Access forbidden"})
        case "Error401":
            return res.status(401).json({ detail: error.message || "Unauthorized"})
        default :
            return res.status(500).json({ detail:  "Something when wrong, Please try again later"})
    }
}

module.exports = {
    ExceptionHandler, Error401, Error404
}