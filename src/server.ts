/* eslint-disable no-console */
import app from './app';
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[Server]: Server is running on port ${PORT}`);
});
