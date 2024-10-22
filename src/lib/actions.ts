"use server";

export async function authenticate(formData: FormData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
    // redirect("/admin");
    return { status: "success", message: "Login Successfull" };
  } catch (error) {
    if (error) {
      return { status: "failed", message: "Login Failed" };
    }
  }
}
