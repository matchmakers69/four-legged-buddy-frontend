import { VFC } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "src/assets/icons";
import AppLink from "src/components/common/AppLink";
import Button from "src/components/common/Button";
import { IMember } from "src/interface/members";
import * as S from "src/styles/components/GridItem/GridItem.styled";
import { Col } from "src/styles/grid";
import { H2 } from "src/styles/typography";

type IMemberItemProps = {
  member: IMember;
};

const MemberItem: VFC<IMemberItemProps> = function ({ member }) {
  console.log(member);
  return (
    <Col data-testid="page-wrapper" xs={4}>
      <S.GridItem>
        <S.ImageOuterWrapper>
          <S.ImageFrame>
            <S.ImageOuter className="image-outer">
              <S.ImageContainer>
                <Image
                  src={member.image ? member.image?.formats?.medium?.url : "/media/images/default-dog.jpg"}
                  layout="fill"
                  className="image-grid"
                />
              </S.ImageContainer>
            </S.ImageOuter>
            <S.FrameFront />
            <S.FrameBack />
          </S.ImageFrame>
        </S.ImageOuterWrapper>
        <S.GridItemWrapper>
          <H2 className="h2 grid-item-title">
            <span className="title-label">Name: </span>
            <span className="title">{member?.name}</span>
          </H2>
          <S.GridItemList>
            <S.GridItemListItem>
              <S.GridItemListItemLabel>Age:</S.GridItemListItemLabel>
              <S.GridItemListItemTitle>{member?.age}</S.GridItemListItemTitle>
            </S.GridItemListItem>
            <S.GridItemListItem>
              <S.GridItemListItemLabel>Breed:</S.GridItemListItemLabel>
              <S.GridItemListItemTitle>{member?.breed}</S.GridItemListItemTitle>
            </S.GridItemListItem>
            <S.GridItemListItem>
              <S.GridItemListItemLabel>Location:</S.GridItemListItemLabel>
              <S.GridItemListItemTitle>{member?.location}</S.GridItemListItemTitle>
            </S.GridItemListItem>
          </S.GridItemList>
          <S.GridItemFooter>
            <Button type="button" variant="link">
              <AppLink
                endIcon={<ArrowRightIcon className="icon-link" />}
                variant="button"
                href={`members/${member?.slug}`}
              >
                Read more
              </AppLink>
            </Button>
          </S.GridItemFooter>
        </S.GridItemWrapper>
      </S.GridItem>
    </Col>
  );
};

export default MemberItem;
