module.exports.Success = (data, message) => {
    const response = {
      code: 200,
      data: data,
      message: message,
    };
  
    return response;
  };


module.exports.Fail = (data, message) => {
    const response = {
        code: 400,
        data: data,
        message: message,
    };

    return response;
};

  