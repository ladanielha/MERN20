const { ExceptionHandler } = require("../libs/lib.exception");
const { CustomerModel } = require("./customer.model");

async function CustomerList(req, res) {
  try {
    const result = CustomerModel.find();
    const resultPagination = await Pagination(req, res, result);
    return res.status(200).json(resultPagination);

    
  } catch (error) {
    return ExceptionHandler(error, res)
  }
}

async function CustomerCreate(req, res) {
  try {
    const result = await CustomerModel.create(req.cleanedData)
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return ExceptionHandler(error, res)
  }
}

async function CustomerDetail(req, res) {
  try {
    const result = await CustomerModel.findOne({ _id: req.params.id });
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return ExceptionHandler(error, res);
  }
}

async function CustomerUpdate(req, res) {
  try {
    const data = await CustomerModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return ExceptionHandler(error,res);
  }
}

async function CustomerDelete(req, res) {
  try {
    const data = await CustomerModel.findOneAndDelete({ _id: req.params.id });
    return res.status(204).json(null);
  } catch (error) {
    console.error(error);
    return ExceptionHandler(error,res);
  }
}


module.exports = {
  CustomerCreate,
  CustomerList, CustomerDetail,CustomerUpdate}
