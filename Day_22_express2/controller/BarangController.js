function GetAllBarang (req, res) {
    return res.status(200).json({ok:1})
}

function CreateBarang (req, res) {
    return res.status(201).json({ok:1})
}

function GetDetailBarang (req, res) {
    return res.status(200).json({ok:1})
}

function UpdateBarang (req, res) {
    return res.status(200).json({ok:1})
}

function DeleteBarang (req, res) {
    return res.status(204).json(null)
}

module.exports = {
    GetAllBarang, CreateBarang, GetDetailBarang, UpdateBarang, DeleteBarang
}