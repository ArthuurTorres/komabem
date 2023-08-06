import "./MenuList.css";
import { useState, useEffect } from "react";
import whatsapp from "../../assets/whatsapp.png";

const MenuList = () => {
  const [itemClass, setItemClass] = useState("class1");
  const [cart, setCart] = useState([]);
  const [selectedRow, setSelectedRow] = useState([]);

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

  useEffect(() => {
    let selectedRowHandler = [];

    cart.map((i) => {
      selectedRowHandler = [...selectedRowHandler, i.id];
    });

    setSelectedRow(selectedRowHandler);
  }, [cart]);

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
                <tr
                  className={`${i.id % 2 === 0 ? "dark-row" : ""} ${
                    selectedRow.find((r) => r === i.id) ? "selected-row" : ""
                  }`}
                  key={i.id}
                  id={i.id + "row"}
                >
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>
                    {new Intl.NumberFormat("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    }).format(parseInt(i.value) / 100)}
                  </td>

                  {/* Quantity input */}
                  <td>
                    <input
                      type="number"
                      defaultValue="1"
                      id={"quantity" + i.id}
                      onChange={(e) => {
                        let cartHandler = [...cart];
                        if (
                          cartHandler.findIndex((item) => item.id === i.id) !==
                          -1
                        ) {
                          cartHandler[
                            cartHandler.findIndex((item) => item.id === i.id)
                          ].quantity = e.target.value;
                          setCart(cartHandler);
                          console.log(cart);
                        }
                      }}
                    ></input>
                  </td>

                  {/* Button add or remove item */}
                  <td>
                    {selectedRow.find((r) => r === i.id) ? (
                      <button
                        onClick={() => {
                          //Remove item from cart
                          let cartHandler = [...cart];
                          cartHandler.splice(
                            cartHandler.findIndex((item) => item.id === i.id),
                            1
                          );
                          setCart(cartHandler);
                        }}
                        className="add-cart-button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          className="bi bi-cart-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z" />
                          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          //Set item to cart
                          setCart([
                            ...cart,
                            {
                              id: i.id,
                              name: i.name,
                              quantity: document.getElementById(
                                "quantity" + i.id
                              ).value,
                              value: i.value,
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
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="button-handler">
          <button
            className="button"
            onClick={() => {
              document.getElementById("form").style.display = "flex";
            }}
          >
            CONFIRME SEU PEDIDO <img src={whatsapp} alt="whatsapp button" />
          </button>
        </div>

        {/* Float form */}
        <div className="form" id="form">
          <h1>
            CONFIRME SEU PEDIDO{" "}
            <span
              id="closeForm"
              onClick={() => {
                document.getElementById("form").style.display = "none";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="currentColor"
                className="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          </h1>
          <form action="#">
            <label htmlFor="name">Nome</label>
            <input type="text" placeholder="Seu Nome" name="name" />
            <label htmlFor="phone">Telefone</label>
            <input type="text" placeholder="Telefone" name="phone"></input>
            <label htmlFor="items">Pratos selecionados</label>
            <div name="items">
              {/* Selected items table */}
              <div className="table-handler">
                <table>
                  <thead>
                    <tr className="dark-row">
                      <td>N° de identificação</td>
                      <td>Nome</td>
                      <td>Preço</td>
                      <td>Quantidade</td>
                      <td>Remover do carrinho</td>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((i) => (
                      <tr
                        className={i.id % 2 === 0 ? "dark-row" : ""}
                        key={i.id}
                      >
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
                            value={i.quantity}
                            id={"quantity" + i.id}
                            onChange={(e) => {
                              let cartHandler = [...cart];
                              if (
                                cartHandler.findIndex(
                                  (item) => item.id === i.id
                                ) !== -1
                              ) {
                                cartHandler[
                                  cartHandler.findIndex(
                                    (item) => item.id === i.id
                                  )
                                ].quantity = e.target.value;
                                setCart(cartHandler);
                                console.log(cart);
                              }
                            }}
                          ></input>
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              //Remove item from cart
                              let cartHandler = [...cart];
                              cartHandler.splice(
                                cartHandler.findIndex(
                                  (item) => item.id === i.id
                                ),
                                1
                              );
                              setCart(cartHandler);
                            }}
                            className="add-cart-button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              fill="currentColor"
                              className="bi bi-cart-x"
                              viewBox="0 0 16 16"
                            >
                              <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z" />
                              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MenuList;
