import React from "react";
import { Avatar, Box, Typography } from '@mui/material';
import profileImage from '../image/profile.jpg';

const Dashboard = () => {
    
    const tasks = [
        { name: 'Мобайл хөгжүүлэлт', time: '2:00:35', progress: 100 },
        { name: 'Visual даалгавар', time: '1:20:00', progress: 80 },
        { name: 'Java хөгжүүлэлт', time: '1:20:00', progress: 60 },
        { name: 'Мобайлын дизайн', time: '1:00', progress: 20 },
    ];

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="h4">Саруулмаагийн үр дүн</Typography>
                <Avatar src={profileImage.src} sx={{ width: 100, height: 100 }} />
            </Box>
            
            <Box className="bg-gray-100 rounded-lg p-8">
                <Typography variant="h6" sx={{ mb: 4 }}>Хийж буй даалгаврууд</Typography>
                {tasks.map((task, index) => (
                    <Box key={index} className="flex items-center justify-between mb-4">
                        <Box className="flex items-center">
                            {/* Use appropriate icons */}
                            <div className="text-md font-normal">{task.name}</div>
                        </Box>
                        <div className="text-md font-normal">{task.time}</div>
                        <Box className="w-full bg-gray-300 rounded-full h-1.5 mx-4">
                            <Box className="bg-yellow-400 h-1.5 rounded-full" sx={{ width: `${task.progress}%` }} />
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Dashboard;
