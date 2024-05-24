// import React from 'react';
// import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

// interface User {
//   name: string;
//   email: string;
// }

// interface Category {
//   name: string;
// }

// const UserInfoPanel :  React.FC<{ user: User; categories: Category[]; onSelectCategory: (category: Category) => void }> = ({
//   user,
//   categories,
//   onSelectCategory,
// }) =>{

//   return (
//     <Paper elevation={2} sx={{ p: 2, width: '100%', maxWidth: 360 }}>
//       <Typography variant="h6">{user.name}</Typography>
//       <Typography variant="subtitle1">{user.email}</Typography>
//       <List component="nav">
//         {categories.map((category, index) => (
//           <ListItem button key={index} onClick={() => onSelectCategory(category)}>
//             <ListItemText primary={category.name} />
//           </ListItem>
//         ))}
//       </List>
//     </Paper>
//   );
// };

// export default UserInfoPanel;
