import React, { useState, useEffect } from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import done from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";

function Contact() {
  const [state, handleSubmit] = useForm("mdkzjoel");
  const [form, setForm] = useState({ email: "", message: "" });

  // Reset form after successful submission
  useEffect(() => {
    if (state.succeeded) {
      setForm({ email: "", message: "" });
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="contact">
      <h1 className="title">
        <span className="icon-envelope"></span> Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and get notified when I publish
        something new.
      </p>
      <div className="flex">
        <form
          onSubmit={handleSubmit}
          className="flex"
          // prevent submission while submitting or succeeded (optional)
          // @ts-ignore
          disabled={state.submitting || state.succeeded}
        >
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              autoComplete="off"
              required
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              disabled={state.submitting || state.succeeded}
            />
            {/* <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            /> */}
          </div>

          <div className="flex">
            <label htmlFor="message">Your message:</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              required
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              disabled={state.submitting || state.succeeded}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting || state.succeeded}
            className={
              state.submitting || state.succeeded ? "not-allowed" : "submit"
            }
          >
            {state.succeeded
              ? "Done"
              : state.submitting
              ? "Submitting..."
              : "Submit"}
          </button>

          <div style={{ height: "10px" }}>
            {state.succeeded && (
              <p
                className="flex success-message"
                style={{              
                  color: "var(--title)",
                  fontSize: "18px",
                  marginTop: "1.7rem",
                }}
              >
                <Lottie
                  loop={false}
                  style={{ height: 37 }}
                  animationData={done}
                />
                Your message has been sent successfully
              </p>
            )}
            {state.errors && (
              <p
                className="flex success-message"
                style={{
                  color: "var(--title)",
                  fontSize: "18px",
                  marginTop: "1.7rem",
                }}
              >
                <DotLottieReact
                  src="https://lottie.host/e64ea81f-4a58-4350-b026-72602a77a4e8/NUdnHzHW7V.lottie"
                  loop={false}
                  autoplay
                  speed={0.8}
                  style={{
                    width: 80,
                    height: 80,

                    padding: "0 -50px",
                  }}
                />
                <span style={{ marginLeft: "-1rem" }}>
                  There was an error sending your message, Please try again
                  later.
                </span>
              </p>
            )}
          </div>
        </form>

        <div className="flex animation">
          <Lottie
            style={{ width: "600px" }}
            loop={true}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
