import React from "react";
import { IUserMember } from "src/interface/members";
import { Row, Col } from "styles/grid";
import UserMember from "../UserMember";

type IUserMembersProp = {
  members: IUserMember[];
  onDelete: (id: string) => void;
};

const UserMembersList = React.memo<IUserMembersProp>(({ members, onDelete }) => {
  return (
    <>
      <Row className="row">
        {members.map((member) => {
          return (
            <Col key={member.id} xs={12} sm={6} lg={4}>
              <UserMember member={member} onDelete={onDelete} />
            </Col>
          );
        })}
      </Row>
    </>
  );
});

export default UserMembersList;
