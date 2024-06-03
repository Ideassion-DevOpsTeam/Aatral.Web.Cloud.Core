/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from "react";
import "./members.scss";
import { Modal, Pagination, Spin } from "antd";
import Icon from "@ant-design/icons";
import {
  faceboonIcon,
  instagram,
  linkedInIcon,
  webIcon,
} from "../../constants/icons";
import useMemberStore from "../../store/MembersPage/membersStore";
import { useLazyQuery } from "@apollo/client";
import { getMembers } from "../../api/index";
import fallbackImage from "../../assets/Images/fallback.png";
import SocialIconsComponent from "../../components/Social/SocialIcons";
import { imageBaseURL } from "../../api/API_URL";

const Members = () => {
  const [isModalOpen, setIsModalOpen] = useState({ id: "", state: false });
  const [members, setMembers] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [isMemberModal, setisMemberModal] = useState(false);
  const [viewMemberModal, setViewMemberModal] = useState({});

  const navigateToWebsite = (website) => window.open(website, "_blank");

  const { founderData, setFounderData } = useMemberStore((state) => ({
    setFounderData: state.setFounderData,
    founderData: state.founderData,
  }));

  const handleFetchMembers = (currentPage) => {
    refetchMember({
      variables: { pageCount: currentPage, pageSize: 12 },
    });
  };

  const handlePageChange = (selectedPage) => {
    handleFetchMembers(selectedPage);
  };

  const [refetchMember, { loading, data, error }] = useLazyQuery(getMembers, {
    fetchPolicy: "network-only",
  });

  const membersData = data ? data.members.data : [];
  const totalMembers = data ? data?.members?.meta?.pagination?.total : null;

  useEffect(() => {
    setFounderData();
    handleFetchMembers(1);
  }, []);

  const showModal = (value, data) => {
    setIsModalOpen({ id: value.id, state: true });
    setViewMemberModal(data);
    setisMemberModal(!isMemberModal);
  };

  const handleCancel = () => {
    setisMemberModal(!isMemberModal);
    setIsModalOpen({
      id: "",
      state: false,
    });
  };

  return (
    <Fragment>
      <section className="members__section">
        <SocialIconsComponent />
        <div className="members__section__block">
          <p className="members__section__block__title">
            Our
            <span className="members__section__block__title--span">
              Members
            </span>
          </p>
        </div>

        <div className="members__section__second__section">
          <div className="members__section__second__section__members">
            {membersData.length  <= 0 ? <Spin /> : (membersData && membersData?.length && membersData?.map((item, index) => (
              <Fragment key={index}>
                <div
                  onClick={() => showModal(item.id, item)}
                  className="members__section__second__section__members--user"
                >
                  {item?.attributes?.Image?.data === null ? (
                    <img src={fallbackImage} alt="fallback" />
                  ) : (
                    <img
                      src={`${imageBaseURL}${item?.attributes?.Image?.data?.attributes?.url}`}
                      alt="Founder_Photo"
                    />
                  )}
                  <div className="members__section__second__section__members--user-details">
                    <p className="members__section__second__section__members--user-details-name">
                      {item?.attributes?.Name}
                    </p>
                    <p
                      key={index}
                      className="members__section__second__section__members--user-details-company"
                    >
                      {item?.attributes?.companies?.data[0]?.attributes?.Name}
                    </p>
                  </div>
                </div>
              </Fragment>
            )))}
          </div>
          {totalMembers && (
            <section className="m-x-auto member-pagination">
              <Pagination
                defaultCurrent={1}
                total={totalMembers}
                pageSize={12}
                showSizeChanger={false}
                onChange={handlePageChange}
              />
            </section>
          )}
        </div>
        <Modal
          width={1000}
          open={isMemberModal}
          footer={null}
          className="member_modal_whole"
          onCancel={handleCancel}
        >
          <div className="member__modal">
            <div className="member__modal__profile">
              <div className="member__modal__profile--picture">
                {viewMemberModal?.attributes?.Image?.data === null ? (
                  <img src={fallbackImage} alt="fallback" />
                ) : (
                  <img
                    src={`${imageBaseURL}${viewMemberModal?.attributes?.Image?.data?.attributes?.url}`}
                    alt="Founder_Photo"
                  />
                )}
              </div>
              <div className="member__modal__profile--details">
                <div className="member__modal__profile--details-names">
                  <p>{viewMemberModal?.attributes?.Name}</p>
                  <p>
                    {
                      viewMemberModal?.attributes?.companies?.data[0]
                        ?.attributes?.Name
                    }
                  </p>
                </div>
                <div className="member__modal__profile--details-social">
                  <span className="member__modal__profile--details-social-link">
                    {viewMemberModal?.attributes?.Image?.data === null ? null : (<a
                      href={viewMemberModal?.attributes?.Social[0]?.Link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon component={linkedInIcon} />
                    </a>)}
                  </span>
                </div>
              </div>
            </div>
            <div className="member__modal__description">
              <div className="member__modal__description--texts">
                <p>{viewMemberModal?.attributes?.About}</p>
              </div>
              <div className="member__modal__description--logo">
                <a
                  href={viewMemberModal?.website_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {viewMemberModal?.attributes?.Image?.data === null ? null : (
                    <img
                      src={`${imageBaseURL}${viewMemberModal?.attributes?.companies?.data[0]?.attributes?.Logo?.data?.attributes?.url}`}
                      onClick={() =>
                        navigateToWebsite(
                          viewMemberModal?.attributes?.companies?.data[0]
                            ?.attributes?.Website
                        )
                      }
                      alt="company-logo"
                    />
                  )}
                </a>
              </div>
            </div>
          </div>
        </Modal>
      </section>
    </Fragment>
  );
};

export default Members;
