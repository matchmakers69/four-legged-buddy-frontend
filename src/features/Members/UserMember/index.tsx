import React from "react";
import Edit from "@mui/icons-material/Edit";
import Link from "next/link";
import { IUserMember } from "src/interface/members";
import * as S from "../common.styled";

type IMemberProp = {
  member: IUserMember;
  onDelete: (id: string) => void;
};

const UserMember = React.memo<IMemberProp>(({ member, onDelete }) => {
  return (
    <S.Member>
      <S.TitleMember>
        <Link href={`/members/${member.slug}`}>
          <a>{member.name}</a>
        </Link>
      </S.TitleMember>
      <button>
        <Link href={`/members/edit/${member.id}`}>
          <a className="edit">
            <Edit />
            <span>Edit member</span>
          </a>
        </Link>
      </button>
      <button className="delete" onClick={() => onDelete(member.id)}>
        Delete member
      </button>
    </S.Member>
  );
});

export default UserMember;
