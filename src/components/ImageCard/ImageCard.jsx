import css from "./ImageCard.module.css";

export default function ImageCard({ image, isOpen }) {
  return (
    <div>
      <img
        onClick={(image) => {
          isOpen(image);
        }}
        src={image.urls.small}
        alt={image.alt_description}
        className={css.croppedImage}
      />
    </div>
  );
}
