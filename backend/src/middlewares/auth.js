
export default (req, res, next) => {
    const userId = req.headers['user-id'];
  
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized: No user ID provided' });
    }
  
    req.userId = userId;
  
    next();
  };
  