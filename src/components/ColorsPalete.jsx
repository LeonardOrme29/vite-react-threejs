import { useState, useEffect } from 'react';
import styles from '../estilos/colores.module.css';
import { useDispatch } from 'react-redux';
import { color,material,clear } from '../features/colorFrame/colorFrameSlice';


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

function ColorSelector(props) {
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
      if (selectedColors.length < 2) {
        setSelectedColors([...selectedColors, colorId]);
        setSelectedMaterials([...selectedMaterials, result.color]);
      }
    } else {
      const updatedColors = selectedColors.filter((color) => color !== colorId);
      setSelectedColors(updatedColors);

      const materialIndex = selectedMaterials.findIndex((material) => material === result.color);
      if (materialIndex !== -1) {
        const updatedMaterials = [...selectedMaterials];
        updatedMaterials.splice(materialIndex, 1);
        setSelectedMaterials(updatedMaterials);
      }
    }
  }
  function handleColorChange(e) {
    setSelectedColors(e.target.value);
    const result = colors.find((item) => item.id === e.target.value);
    setSelectedMaterials(result.color)
  }

  if (props.num===2) {
    dispatch(clear({
    }))
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
  }else{
    return(<div className={styles.colorsBox}>
      {colors.map((color) => (
        <div key={color.id} className={styles.colorOption}>
          <input
            type="radio"
            name="color"
            id={color.id}
            value={color.id}
            onChange={handleColorChange}
            
          />
          <label htmlFor={color.id}>
            <span className={styles[color.class]}></span>
          </label>
          <p>{color.id}</p>
        </div>
      ))}
      </div>);
  }
}

export default ColorSelector;