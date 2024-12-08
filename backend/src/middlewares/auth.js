export default (req, res, next) => {
<<<<<<< Updated upstream
  const userId = req.headers['user-id'];
  console.log("Incoming user-id:", userId); // 添加日志
  if (!userId) {
    console.error("Unauthorized: No user-id provided");
    return res.status(401).json({ message: 'Unauthorized: No user ID provided' });
  }
  req.userId = userId;
  console.log("Auth passed for userId:", userId);
  next();
};

  
=======
  const userId = req.headers["user-id"];

  if (!userId) {
    console.error("Missing userId in headers");
    return res.status(401).json({ message: "Unauthorized: No user ID provided" });
  }

  req.userId = userId; // 将 userId 附加到请求对象中
  next();
};
>>>>>>> Stashed changes
