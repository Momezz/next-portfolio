
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const sendMail = async (values) => {
  let message = false;
  try {
    const response = await fetch(`${BASE_URL}send-mail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (response.ok) {
      message = true;
    } else {
      throw new Error(`Network error: ${response.status}`);
    }
  } catch (error) {
    throw new Error(error);
  }
  return message;
}
