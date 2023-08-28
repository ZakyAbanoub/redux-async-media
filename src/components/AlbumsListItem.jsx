import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrash } from "react-icons/go";

const AlbumsListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const removeAlbumHandler = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        className="mr-2"
        onClick={removeAlbumHandler}
        loading={results.isLoading}
      >
        <GoTrash />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos in the album
    </ExpandablePanel>
  );
};

export default AlbumsListItem;
