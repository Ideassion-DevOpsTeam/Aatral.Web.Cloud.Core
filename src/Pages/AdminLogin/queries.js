import { gql } from '@apollo/client';

export const GET_MEMBER_DETAILS = gql`
  query JoinMembers($search: String, $page: Int, $pageSize: Int) {
    joinMembers(
      filters: {
        or: [
          { email: { containsi: $search } }
          { company: { containsi: $search } }
          { firstName: { containsi: $search } }
          { lastName: { containsi: $search } }
          { subDesignation: { containsi: $search } }
          { subCategory: { containsi: $search } }
          { website: { containsi: $search } }
          { address: { containsi: $search } }
          { gstNumber: { containsi: $search } }
          { remarks: { containsi: $search } }
          { designation: { containsi: $search } }
          { industry: { containsi: $search } }
          { companyLogo: { containsi: $search } }
          { phone: { containsi: $search } }
          { confirmationStatus: { containsi: $search } }
        ]
      }
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      data {
        id
        attributes {
          email
          company
          firstName
          lastName
          subDesignation
          subCategory
          website
          address
          gstNumber
          employeeCount
          remarks
          designation
          industry
          companyLogo
          phone
          createdAt
          confirmationStatus
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
        }
      }
    }
  }
`;