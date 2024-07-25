import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = (onDelete) => {
  const selectContacts = useSelector((state) => state.contacts.items);
  return (
    <ul className={css.contactList}>
      {selectContacts.map((contact) => {
        return (
          <li className={css.contactListItem} key={contact.id}>
            <Contact {...contact} />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
