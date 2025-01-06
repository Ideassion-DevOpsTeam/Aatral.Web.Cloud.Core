import React, { useState, useEffect, Fragment } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useLazyQuery,
} from "@apollo/client";
import {
  Table,
  Card,
  Input,
  Button,
  Tag,
  Dropdown,
  Checkbox,
  Menu,
  Row,
  Col,
  Drawer,
  Descriptions,
  Avatar,
  Typography,
  Tooltip
} from "antd";
import { SearchOutlined, SettingOutlined , DownloadOutlined } from "@ant-design/icons";
import Header from "../../components/Header/Header";
import "./AdminTable.scss";
import Loader from "../../components/Loader/loader";
import { useNavigate } from "react-router-dom";
import { createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GET_MEMBER_DETAILS } from "./queries";
import Papa from 'papaparse';
import { removableFields } from "../Contact/static_data";
import { jwtDecode } from 'jwt-decode';

const { Title } = Typography;

// Create HTTP Link
const httpLink = createHttpLink({
  uri: "https://backend.aatralindia.org/graphql",
});

// Middleware to dynamically add token to headers
const authLink = setContext(() => {
  const token = localStorage.getItem("authToken") || "";
  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
});

// Apollo Client Setup
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const AdminTable = () => {
  const [members, setMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [ viewDetails, setViewDetails ] = useState({})

  const [fetchMembers, { loading }] = useLazyQuery(GET_MEMBER_DETAILS, {
    variables: {
      search: searchQuery,
      page: pagination.current,
      pageSize: pagination.pageSize,
    },
    onCompleted: (data) => {
      const formattedData = data.joinMembers.data.map((member) => ({
        key: member.id,
        email: member.attributes.email,
        company: member.attributes.company,
        firstName: member.attributes.firstName,
        lastName: member.attributes.lastName,
        phone: member.attributes.phone,
        createdAt: new Date(member.attributes.createdAt).toLocaleString(),
        address: member.attributes.address,
        status: member.attributes.confirmationStatus,
        designation: member.attributes.designation,
        subDesignation: member.attributes.subDesignation,
        subCategory: member.attributes.subCategory,
        website: member.attributes.website,
        gstNumber: member.attributes.gstNumber,
        employeeCount: member.attributes.employeeCount,
        remarks: member.attributes.remarks,
        industry: member.attributes.industry,
        companyLogo: member.attributes.companyLogo,
      }));
      setMembers(formattedData);

      setPagination((prev) => ({
        ...prev,
        total: data.joinMembers.meta.pagination.total,
      }));
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      const decodedToken = jwtDecode(token);

      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        // Token is expired
        localStorage.removeItem("authToken");
        navigate("/admin-login");
      } else {
        fetchMembers(pagination.current, pagination.pageSize);
      }
    } else {
      navigate("/admin-login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchMembers, navigate]);

  const renderStatus = (status) => {
    let color;
    let text;

    switch (status) {
      case "Confirmed":
        color = "green";
        text = "verified";
        break;
      case "Pending":
        color = "orange";
        text = "unverified";
        break;
      default:
        color = "blue";
        text = "Unknown";
        break;
    }

    return <Tag color={color}>{text}</Tag>;
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) =>
        `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`),
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search Name"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
          />
          <div style={{ marginTop: 8 }}>
            <Button
              type="link"
              size="small"
              onClick={() => clearFilters && clearFilters()}
            >
              Clear
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => confirm()}
              icon={<SearchOutlined />}
            >
              Search
            </Button>
          </div>
        </div>
      ),
      onFilter: (value, record) =>
        `${record.firstName} ${record.lastName}`
          .toLowerCase()
          .includes(value.toLowerCase()),
      render: (_, record) => `${record.firstName} ${record.lastName}`,
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
      sorter: (a, b) => a.designation.localeCompare(b.designation), // Sorting logic
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search Designation"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            } // Update selected keys on input change
            onPressEnter={() => confirm()} // Apply filter on pressing Enter
          />
          <div style={{ marginTop: 8 }}>
            <Button
              type="link"
              size="small"
              onClick={() => clearFilters && clearFilters()} // Clear filter
            >
              Clear
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => confirm()} // Apply filter
              icon={<SearchOutlined />}
            >
              Search
            </Button>
          </div>
        </div>
      ),
      onFilter: (value, record) =>
        record.designation.toLowerCase().includes(value.toLowerCase()), // Filter logic
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
      sorter: (a, b) => a.company.localeCompare(b.company),
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder={`Search Company`}
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
          />
          <div style={{ marginTop: 8 }}>
            <Button
              type="link"
              size="small"
              onClick={() => clearFilters && clearFilters()}
            >
              Clear
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => confirm()}
              icon={<SearchOutlined />}
            >
              Search
            </Button>
          </div>
        </div>
      ),
      onFilter: (value, record) =>
        record.company.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: "Industry",
      dataIndex: "industry",
      key: "industry",
      sorter: (a, b) => a.industry.localeCompare(b.industry), // Sorting logic for Industry (alphabetical order)
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search Industry"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            } // Update filter value
            onPressEnter={() => confirm()} // Apply filter on Enter key press
          />
          <div style={{ marginTop: 8 }}>
            <Button
              type="link"
              size="small"
              onClick={() => clearFilters && clearFilters()} // Clear filter
            >
              Clear
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => confirm()} // Apply filter
              icon={<SearchOutlined />}
            >
              Search
            </Button>
          </div>
        </div>
      ),
      onFilter: (value, record) =>
        record.industry.toLowerCase().includes(value.toLowerCase()), // Filter logic based on Industry
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder={`Search Email`}
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
          />
          <div style={{ marginTop: 8 }}>
            <Button
              type="link"
              size="small"
              onClick={() => clearFilters && clearFilters()}
            >
              Clear
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => confirm()}
              icon={<SearchOutlined />}
            >
              Search
            </Button>
          </div>
        </div>
      ),
      onFilter: (value, record) =>
        record.email.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      sorter: (a, b) => a.phone.localeCompare(b.phone),
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder={`Search Phone`}
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
          />
          <div style={{ marginTop: 8 }}>
            <Button
              type="link"
              size="small"
              onClick={() => clearFilters && clearFilters()}
            >
              Clear
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => confirm()}
              icon={<SearchOutlined />}
            >
              Search
            </Button>
          </div>
        </div>
      ),
      onFilter: (value, record) =>
        record.phone.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      // fixed: 'right',
      render: (status) => renderStatus(status),
      filters: [
        { text: "Verified", value: "Confirmed" },
        { text: "Unverified", value: "Pending" },
      ],
      onFilter: (value, record) =>
        record.status.toLowerCase().includes(value.toLowerCase()),
    },  
  ];

  const defaultVisibleColumns = [
    "name",
    "designation",
    "company",
    "industry",
    "email",
    "phone",
    "status"
  ];

  const [visibleColumns, setVisibleColumns] = useState(defaultVisibleColumns);
  const filteredColumns = columns.filter((column) =>
    visibleColumns.includes(column.key)
  );

  const handleColumnVisibilityChange = (checkedValues) => {
    setVisibleColumns(checkedValues);
  };

  const columnMenu = (
    <Menu style={{ maxHeight: "200px", overflowY: "auto", width: "200px" }}>
      <Menu.Item>
        <Checkbox.Group
          value={visibleColumns}
          onChange={handleColumnVisibilityChange}
        >
          <Row>
            {columns.map((column) => (
              <Col span={24} key={column.key}>
                <Checkbox value={column.key}>{column.title}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </Menu.Item>
    </Menu>
  );

  const handleSearch = () => {
    setSearchQuery(searchInput);
    fetchMembers({ variables: { searchQuery } });
  };

  const fetchTableData = (page, pageSize) => {
    fetchMembers({
      variables: {
        page,
        pageSize,
      },
    });
  };

  const handleTableChange = (pagination) => {
    const { current, pageSize } = pagination;

    setPagination({ ...pagination });

    fetchTableData(current, pageSize);
  };

  const handleRowClick = record => {
    setViewDetails(record)
    setDrawerVisible(true)
  }

  const handleCloseDrawer = () => {
    setViewDetails({})
    setDrawerVisible(false)
  }

  const handleDownloadCSV = () => {
    const dataWithoutLogo = members.map(({ companyLogo, ...rest }) => rest);

    const csv = Papa.unparse(dataWithoutLogo);

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'report.csv';
    link.click();
  };

  const showContent = (content, title) => {
    if (title === 'Website') {
      return <a href={content} target="_blank" rel="noopener noreferrer"> {content} </a> 
    } else if (title === 'Company Logo') {
      return <img src={content} alt="Company Logo" style={{ width: "100px", height: "auto", marginBottom: "8px" }} />
    } else {
      return content
    }
  }

  const DescriptionItem = ({ title, content }) => (
    <div style={{ fontSize: 16, lineHeight: '50px', marginBottom: 7, color: 'rgba(0,0,0,0.65)', display: "flex" }}>
      <b style={{ marginRight: 8, display: 'inline-block', color: 'rgba(0,0,0,0.85)' }}>{title}:</b>
      {showContent(content, title)}
    </div>
  );

  const toPascalCaseWithSpace = (str) => {
    return str
    .replace(/([A-Z])/g, ' $1') // Insert space before capital letters
    .trim() // Remove leading/trailing spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
  }             

  return (
    <Fragment>
      <Header />
      <div className="card-container">
        <Card className="card-content" bodyStyle={{ padding: 0 }}>
          <div style={{ display: "flex", marginBottom: "10px"}}>
            <Input
              placeholder="Search members"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              style={{ width: 300, height: 35 }}
              disabled={loading}
              suffix={
                <Button
                  icon={<SearchOutlined />}
                  onClick={handleSearch}
                  style={{ border: "none", background: "transparent" }}
                  type="text"
                  disabled={loading}
                />
              }
            />

            <Button type="primary" disabled={loading} onClick={handleDownloadCSV} style={{ background: "#fcb01a", marginLeft: "auto"  }} icon={<DownloadOutlined />}>
              Download CSV
            </Button>

            <Dropdown
              overlay={columnMenu}
              trigger={["click"]}
              style={{ marginLeft: "10px", alignItems: "end" }}
              disabled={loading}
            >
              <Button
                type="primary"
                icon={<SettingOutlined />}
                style={{ marginLeft: "10px", background: "#fcb01a" }}
                disabled={loading}
              > Configure Columns
              </Button>
            </Dropdown>
          </div>
          <div>
            {loading ? (
              <Loader />
            ) : (
              <Table
                columns={filteredColumns}
                dataSource={members}
                bordered={true}
                scroll={{ x: "max-content" }}
                pagination={{
                  current: pagination.current,
                  pageSize: pagination.pageSize,
                  total: pagination.total,
                }}
                onChange={handleTableChange}
                rowKey="key"
                onRow={(record) => ({
                  onClick: () => handleRowClick(record)
                })}
              />
            )}
          </div>
        </Card>
        <Drawer
          title="View Details"
          placement="right"
          closable={true}
          onClose={() => handleCloseDrawer()}
          open={drawerVisible}
          getContainer={false}
          width={750}
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {viewDetails && (
          <>
            <div style={{ textAlign: "center", marginBottom: "20px", fontFamily: 'Manrope, sans-serif' }}>
            {viewDetails.companyLogo ? (
              <Tooltip title="Click to download">
                <a
                  href={viewDetails.companyLogo}
                  // download={`${viewDetails.firstName}_logo.png`}
                  download={`${viewDetails.firstName} ${viewDetails.lastName}_company_logo.png`}
                >
                  <Avatar
                    src={viewDetails.companyLogo || undefined}
                    size={100}
                    style={{
                      backgroundColor: viewDetails.companyLogo ? "transparent" : "#f0f0f0",
                      color: viewDetails.companyLogo ? "inherit" : "#999",
                      border: "1px solid #ddd",
                      cursor: viewDetails.companyLogo ? "pointer" : "default",
                    }}
                  >
                    {!viewDetails.companyLogo && "Logo"}
                  </Avatar>
                </a>
              </Tooltip>
            ) : (
              <Avatar
                size={100}
                style={{
                  backgroundColor: "#f0f0f0",
                  color: "#999",
                  border: "1px solid #ddd",
                }}
              >
                Logo
              </Avatar>
            )}
              <Title level={4}>{viewDetails.firstName} {viewDetails.lastName}</Title>
              <p>{viewDetails.designation}</p>
            </div>
            <Descriptions column={1} bordered labelStyle={{ width: '170px' }}>
              <Descriptions.Item label="Website">
              <a href={viewDetails?.website} target="_blank" rel="noopener noreferrer">
                {viewDetails.website}
              </a>
              </Descriptions.Item>
              <Descriptions.Item label="Sub-Category">
                {viewDetails?.subCategory}
              </Descriptions.Item>
              <Descriptions.Item label="Sub-Designation">
                  {viewDetails?.subDesignation}
              </Descriptions.Item>
              <Descriptions.Item label="Address">
                {viewDetails?.address}
              </Descriptions.Item>
              <Descriptions.Item label="GST Number">
                {viewDetails?.gstNumber}
              </Descriptions.Item>
              <Descriptions.Item label="Employee Count">
                {viewDetails?.employeeCount}
              </Descriptions.Item>
              <Descriptions.Item label="Created At">
                {viewDetails?.createdAt}
              </Descriptions.Item>
              <Descriptions.Item label="Remarks">
                {viewDetails?.remarks}
              </Descriptions.Item>
            </Descriptions>
          </>
        )}
        </Drawer>
      </div>
    </Fragment>
  );
};

const App = () => (
  <ApolloProvider client={client}>
    <AdminTable />
  </ApolloProvider>
);

export default App;
