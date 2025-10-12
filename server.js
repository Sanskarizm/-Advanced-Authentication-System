import {app} from './index.js';

const PORT = process.env.PORT || 6040;

// ✅ Listen on 0.0.0.0 so Render can detect the port
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
