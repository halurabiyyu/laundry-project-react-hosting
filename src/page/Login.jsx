import React, { useEffect, useState } from "react";
import supabase from "../supabase";

export default function Login() {
  // handle login with github
  const handleGitHubLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) console.error("Error logging in with GitHub:", error.message);
  };

  return (
    <div>
      <button onClick={handleGitHubLogin}>Login with GitHub</button>
      {/* <button onClick={handleGoogleLogin}>Login with Google</button> */}
    </div>
  );
}
