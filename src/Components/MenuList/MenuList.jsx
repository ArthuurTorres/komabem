import "./MenuList.css";
import { useState } from "react";
import whatsapp from "../../assets/whatsapp.png";

const MenuList = () => {
  const [itemClass, setItemClass] = useState("class1");
  const [cart, setCart] = useState([]);

  const items = {
    class1: [
      {
        id: 1,
        name: "item1",
        value: 1000,
      },
      {
        id: 2,
        name: "item2",
        value: 1500,
      },
    ],
    class2: [
      {
        id: 3,
        name: "item3",
        value: 1000,
      },
      {
        id: 4,
        name: "item4",
        value: 1500,
      },
    ],
  };

  return (
    <section id="menulist">
    <div className="menu-list">
      <h1>Faça seu pedido</h1>
      <div className="class-selector">
        <button
          onClick={() => {
            setItemClass("class1");
          }}
          className={itemClass === "class1" ? "active" : ""}
        >
          classe 1
        </button>
        <button
          onClick={() => {
            setItemClass("class2");
          }}
          className={itemClass === "class2" ? "active" : ""}
        >
          classe 2
        </button>
      </div>
      <div className="table-handler">
        <table>
          <thead>
            <tr className="dark-row">
              <td>N° de identificação</td>
              <td>Nome</td>
              <td>Preço</td>
              <td>Quantidade</td>
              <td>Adicionar ao carrinho</td>
            </tr>
          </thead>
          <tbody>
            {items[itemClass].map((i) => (
              <tr className={i.id % 2 === 0 ? "dark-row" : ""} key={i.id}>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>
                  {new Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  }).format(parseInt(i.value) / 100)}
                </td>
                <td>
                  <input
                    type="number"
                    defaultValue="1"
                    id={"quantity" + i.id}
                  ></input>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setCart([
                        ...cart,
                        {
                          id: i.id,
                          quantidade: document.getElementById("quantity" + i.id)
                            .value,
                        },
                      ]);
                    }}
                    className="add-cart-button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      className="bi bi-cart-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button-handler">
        <button className="button">
          <a href="#">
            CONFIRME SEU PEDIDO <img src={whatsapp} alt="whatsapp button" />
          </a>
        </button>
      </div>
    </div>
    </section>
  );
};

export default MenuList;
