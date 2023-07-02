import { useState, useEffect } from 'react';
import styles from '../estilos/colores.module.css';
import { useDispatch } from 'react-redux';
import { color,material} from '../features/colorFrame/colorFrameSlice';


const colors = [
  { id: 'Natural', class: 'Natural', color: 0xe6cea5 },
  { id: 'Blanco', class: 'Blanco', color: 0xe6e6e6 },
  { id: 'Beige', class: 'Beige', color: 0xE9CFA9 },
  { id: 'Dorado', class: 'Dorado', color: 0x8f6e0a },
  { id: 'Rojo', class: 'Rojo', color: 0x9a341d },
  { id: 'Gris', class: 'Gris', color: 0x8f8d8d },
  { id: 'Marron', class: 'Marron', color: 0x5A4B4B },
  { id: 'Negro', class: 'Negro', color: 0x252525 },
];

function ColorSelector() {
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(color(selectedColors));
    dispatch(material(selectedMaterials));
  }, [selectedColors, selectedMaterials]);

  function handleColorChangeDoble(e) {
    const colorId = e.target.value;
    const isChecked = e.target.checked;
    const result = colors.find((item) => item.id === colorId);
    if (isChecked) {
      if (selectedColors[0]===null) {
        setSelectedColors([colorId,selectedColors[1]]);
        setSelectedMaterials([result.color,selectedMaterials[1]]);
      }else if (selectedColors[1]===null) {
        setSelectedColors([selectedColors[0],colorId]);
        setSelectedMaterials([selectedMaterials[0],result.color]);
      }
      if (selectedColors.length < 2) {
        setSelectedColors([...selectedColors, colorId]);
        setSelectedMaterials([...selectedMaterials, result.color]);
      }
    } else {
      const updatedColors = selectedColors.map((color) => (color === colorId ? null : color));
      setSelectedColors(updatedColors);
      const updatedMaterials = selectedMaterials.map((material) =>
        material === result.color ? null : material
      );
      setSelectedMaterials(updatedMaterials);
    }
  }
    return (<div className={styles.colorsBox}>
      {colors.map((color) => (
        <div key={color.id} className={styles.colorOption}>
          <input
            type="checkbox"
            name="color"
            id={color.id}
            value={color.id}
            onChange={handleColorChangeDoble}
            checked={selectedColors.includes(color.id)}
          />
          <label htmlFor={color.id}>
            <span className={styles[color.class]}></span>
          </label>
          <p>{color.id}</p>
        </div>
      ))}
    </div>)
  
}

export default ColorSelector;