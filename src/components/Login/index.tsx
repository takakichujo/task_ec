import { FC } from 'react';
import { Box } from '@mui/material';
export const Login: FC = () => {
  return (
    <div>
      <h1>ユーザーログイン</h1>
      <Box
        border={1}
        borderColor='black'
        p={2}
        margin='200px auto 0'
        width='600px'
        height='500px'
      ></Box>
    </div>
  );
};
