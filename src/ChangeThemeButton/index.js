import "./ChangeThemeButton.css";

function ChangeThemeButton({ theme, onChangeTheme }) {
  return (
    <button 
      // Aplicar clases condicionalmente según el tema
      className={`change-theme-button ${theme ? "--button-dark-theme" : ""}`}
      // Manejar el evento de clic para cambiar el tema
      onClick={onChangeTheme}
    >
      {/* Icono de bombilla, visible solo en tema claro */}
      <i className="fa-solid fa-lightbulb" style={{ display: theme ? "" : "none" }}></i>
      {/* Icono de luna, visible solo en tema oscuro */}
      <i className="fa-solid fa-moon" style={{ display: theme ? "none" : "" }}></i>
    </button>
  );
}

export { ChangeThemeButton };