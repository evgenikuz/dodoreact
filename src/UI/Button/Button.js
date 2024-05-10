import s from "./Button.module.css";
// type принимает значения light, secondary (цвет кнопки)
// width принимает класс big (регулирует размер кнопки)

function Button({ meaning, type, width }) {
  return (
    <button className={`${s.primary} ${s[type]} ${s[width]}`}>{meaning}</button>
  );
}

export default Button;
