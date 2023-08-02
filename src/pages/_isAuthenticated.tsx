// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../store/session';
// import { Session } from 'next-auth';

// export function useFetchUser(sessionData: Session | null): void {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         if (sessionData?.user) {
//           const response = await fetch('/api/auth/user');
//           const data = await response.json();
//           console.log('DATA--------------------------', data)
//           dispatch(setUser(data));
//         }
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };
//     fetchUser();
//   }, [dispatch, sessionData]);
// }
