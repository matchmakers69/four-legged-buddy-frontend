import { FC, useState } from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { Button } from "src/components/common/Button/Button.styled";
import Modal from "src/components/common/Modal";
import EditMemberForm from "src/components/Forms/EditMemberForm";
import ImageUpload from "src/components/ImageUpload";
import Layout from "src/components/Layout";
import { API_URL } from "src/config";
import withProtectedRoute from "src/HOC/withProtectedRoute";
import { IMember } from "src/interface/members";
import { Col } from "src/styles/grid";
import { H1, H3, Paragraph } from "src/styles/typography";
import GridTemplate from "src/templatetes/GridTemplate";

type IEditMemberProps = {
  member: IMember;
};

const EditMember: FC<IEditMemberProps> = function ({ member }) {
  const [imagePreview, setImagePreview] = useState(member?.image ? member?.image?.formats?.thumbnail?.url : null);
  const [showModal, setShowModal] = useState(false);
  const handleImageUploaded = async () => {
    try {
      const res = await fetch(`${API_URL}/members/${member.id}`);
      const data = await res.json();
      setImagePreview(data?.image?.formats?.thumbnail.url);
      setShowModal(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Layout pageTitle="Members - Edit member">
      <GridTemplate>
        <Col data-testid="page-wrapper" xs={12}>
          <H1 className="h1 bold m-30-bottom">
            <span className="title-paragraph">Edit details</span>
          </H1>
          <EditMemberForm member={member} />
          <H3 className="h3 m-30-bottom">Member image</H3>
          {imagePreview ? (
            <Image src={imagePreview} width={140} height={150} />
          ) : (
            <div>
              <Paragraph className="p">No image uploaded</Paragraph>
            </div>
          )}
          <div>
            <Button onClick={() => setShowModal(true)} type="button" className="btn--primary">
              Set image
            </Button>
          </div>
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <ImageUpload memberId={member.id} imageUploaded={handleImageUploaded} />
          </Modal>
        </Col>
      </GridTemplate>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = withProtectedRoute(async ({ params: { id } }) => {
  const res = await fetch(`${API_URL}/members/${id}`);
  const member = await res.json();
  return {
    props: {
      member,
    },
  };
});

export default EditMember;
