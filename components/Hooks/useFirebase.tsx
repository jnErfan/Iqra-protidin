import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitialize from "../Firebase/FirebaseInitialize";
import Swal from "sweetalert2";

//  Call FirebaseInitialized
FirebaseInitialize();
const useFirebase = () => {
  const [user, setUser] = useState({} as any);
  const [users, setUsers] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const auth = getAuth();

  //  Email And Password Create Account
  const emailPasswordSignUp = (email: string, password: string) => {
    setIsLoading(true);
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log('emailPasswordSignUp result',result);
        
        setUser(result?.user);
        Swal.fire({
          icon: "success",
          title: "Great!",
          text: "SignUp Successful",

          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Something Went Wrong",
          text: error.message,

          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .finally(() => setIsLoading(false));
  };

  // Login Email And Password And Redirect
  const emailPasswordLogin = (email: string, password: string, navigate: any) => {
    setError("");
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result?.user);
        Swal.fire({
          icon: "success",
          title: "Welcome Back",
          text: "Login Successful",

          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
        navigate.push("/admin/dashboardHome");
      })
      .catch((error) => {
        console.log('error', error);

        setError(error.message);
        Swal.fire({
          icon: "error",
          title: "Something Went Wrong",
          text: error.message,

          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .finally(() => setIsLoading(false));
  };

  // Reset Login Email Password User
  const resetPassword = (email: string) => {
    setError("");

    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Password Reset Email Send",
          text: "Please Check Email",

          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          icon: "error",
          title: "Something Went Wrong",
          text: "Please Try Again",

          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  // Log Out All
  const logOutAll = () => {
    Swal.fire({
      title: "Are You Sure?",
      text: "You Won't LogOut",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "LogOut",
      cancelButtonText: "Stay Logged",
    }).then((result: any) => {
      if (result.isConfirmed) {
        signOut(auth)
          .then(() => {
            setUser("");
            Swal.fire({
              icon: "success",
              title: "LogOut Success",
              text: "I Hope You'll Come Back",

              padding: "3em",
              showConfirmButton: false,
              timer: 3000,
            });
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => setIsLoading(false));
      }
    });
  };

  // OnStateChange User Login Saved
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
      setIsLoading(false);
    });
  }, [auth]);

  //  Get Logged User Information
  useEffect(() => {
    // emailPasswordSignUp("test@gmail.com","AAaa@123")
    fetch(`https://server.eiqraprotidin.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data?.[0]));
  }, [user?.email]);
  return {
    user,
    users,
    setError,
    emailPasswordSignUp,
    emailPasswordLogin,
    resetPassword,
    logOutAll,
    isLoading,
    error,
  };
};

export default useFirebase;
