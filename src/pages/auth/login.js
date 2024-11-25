import LoginForm from '../../components/auth/LoginForm'; 
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/router';

const Login = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push(user.role === 'admin' ? '/admin/index' : '/user/index');
    }
  }, [user, router]);

  return (
    <div className="max-w-md mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <LoginForm /> 
    </div>
  );
};

export default Login;
