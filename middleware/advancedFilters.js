const advancedFilters = (model, popuate) => async (req, res, next) => {
  let query;
  const reqQuery = { ...req.query };

  const removeFields = ["select", "page", "sort", "limit"];

  removeFields.forEach((param) => delete reqQuery[param]);

  let querystr = JSON.stringify(reqQuery);
  //add $ to operators
  querystr = querystr.replace(
    /\b(gt|gte|lt|lte|in|search)\b/g,
    (match) => `$${match}`
  );
  console.log(querystr);

  query = model.find(JSON.parse(querystr));
  //select
  if (req.query.select) {
    const fields = req.query.select.split(",").join(" ");
    query = query.select(fields);
  }

  //sort
  if (req.query.sort) {
    const sortFields = req.query.sort.split(",").join(" ");
    query = query.sort(sortFields);
  } else {
    //default sort
    query = query.sort("-createdAt");
  }

  if (req.query.page) {
    //pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 50;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    query = query.skip(startIndex).limit(limit);
  }

  const totalResults = await model.countDocuments();

  var results = await query;

  if (!results) {
    return next(new ErrorResponse(`recipes not found`, 404));
  }

  res.advancedFilters = {
    success: true,
    total: totalResults,
    count: results.length,
    data: results,
  };

  next();
};

module.exports = advancedFilters;
