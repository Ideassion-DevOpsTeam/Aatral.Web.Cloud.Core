import { gql } from "@apollo/client";

export const getMembers = gql`
	query Members($pageCount: Int, $pageSize: Int) {
		members(pagination: { page: $pageCount, pageSize: $pageSize }) {
			data {
				id
				attributes {
					Name
					Designation
					About
					Type
                    Image {
                        data {
                            attributes {
                                url
                                mime
                                name
                            }
                            id
                        }
                    }
                    companies {
                        data {
                            id
                            attributes {
                                Name
                                Type
                                Website
                                Logo {
                                    data {
                                        id
                                        attributes {
                                            mime
                                            url
                                            name
                                            alternativeText
                                            previewUrl
                                        }
                                    }
                                }
                                Description
                            }
                        }
                    }
				}
			}
		}
	}
`;

export const getPartners = gql`
query Companies {
    companies {
        data {
            id
            attributes {
                Name
                Website
                Type
                Logo {
                    data {
                        id
                        attributes {
                            name
                            alternativeText
                            mime
                            url
                        }
                    }
                }
            }
        }
    }
}
`;