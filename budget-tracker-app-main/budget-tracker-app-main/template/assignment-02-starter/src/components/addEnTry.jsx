import AddButton from "./addBuTTon";
import EntryDescription from "./entryDesCripTion";
import EntryValue from "./enTryValue";
import EntryType from "./enTryType";


export default function AddEntry() {
    return (
      <div className="border-b bg-gray-100 py-3">
        <div className="mx-auto max-w-xl px-5">
          <form className="flex gap-2">
            <EnTryType />
            <EntryDescription />
            <EntryValue />
            <AddButton />
          </form>
        </div>
      </div>
 );
}