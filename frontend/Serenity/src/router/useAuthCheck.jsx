export const useAuthCheck = () => {
  // Check if the user is logged in (for example, check if a token exists in localStorage)
  const token = localStorage.getItem('token');

  // Return true if the user is logged in, false otherwise
  return !!token;
};
