import React from "react";
import './App.css';

function Faq () {
    return(
        <section id="faq">
            <div className="faq-container py-5">
                <h2 className="text-center sm:pb-8 pb-4 sm:text-4xl text-xl font-bold">Frequently asked questions</h2>

                <div className="acc-container">

                    <button className="acc-btn">What is Lorem Ipsum?</button>
                    <div className="acc-content">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    <button className="acc-btn">
                        Why do we use it?
                    </button>
                    <div className="acc-content">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    <button className="acc-btn">
                        Where does it come from?
                    </button>
                    <div className="acc-content">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    <button className="acc-btn">
                        Where can I get some?
                    </button>
                    <div className="acc-content">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

  const btns = document.querySelectorAll(".acc-btn");
  let openBtn = null;

  function accordion() {
    this.classList.toggle("is-open");

    const content = this.nextElementSibling;

    if (openBtn && openBtn !== this) {
      openBtn.classList.remove("is-open");
      openBtn.nextElementSibling.style.maxHeight = null;
    }

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      openBtn = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      openBtn = this;
    }
  }

  btns.forEach((el) => el.addEventListener("click", accordion));

export default Faq;