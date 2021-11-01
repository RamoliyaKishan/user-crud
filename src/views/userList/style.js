import { makeStyles } from "@material-ui/core/styles";

const userTableStyle = makeStyles((theme) => ({
    root: {
        maxWidth:'100vw',
        
        paddingTop: theme.spacing(2),
        backgroundImage : "url(https://www.wallpapertip.com/wmimgs/183-1834910_geometric-minimalist-abstract-background.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        minHeight: "calc(100vh - 64px)",
    },
    tableWrapper: {
        boxShadow: "0 3px 8px 0 rgba(97, 97, 97, 0.08)",
        borderRadius: "6px",
        margin: "auto 30px",
        "& .pagination-wrapper": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
          "& .MuiTablePagination-root": {
            padding: "10px 0 10px 30px !important",
          },
        },
      },
      customTable: {
        marginTop: 25,
        maxHeight: 680,
        "@media (max-height: 800px)": {
          maxHeight: 500,
        },
        "& .MuiTable-root": {
          "& .MuiTableCell-root": {
            fontWeight: 500,
            // border: "none",
          },
          "& .MuiTableHead-root": {
            boxShadow: "0 3px 8px 0 rgba(97, 97, 97, 0.08)",
            backgroundColor: '#6255a5',
            "& .MuiTableCell-root": {
              fontSize: "18px",
              color: "#fff",
              padding: "20px 10px",
            //   textAlign: 'center',
            //   borderBottom: "1px solid #f4f4f4",
              "&:first-child": {
                paddingLeft: "30px",
              },
              "&:last-child": {
                paddingRight: "30px",
                width:"350px"
              },
            },
          },
          "& .MuiTableBody-root": {
            "& .MuiTableCell-root": {
              padding: "22px 10px",
              "&:first-child": {
                paddingLeft: "30px",
              },
              "&:last-child": {
                paddingRight: "30px",
              },
              
            },
          },
        },
        "& .edit-btn" : {
            backgroundColor: 'Green',
            marginRight: "10px",
            borderRadius: "5px",
            color: "#fff",
            fontWeight: "600",
        },
        "& .edit-btn:hover"  : {
            backgroundColor: '#25be50',
        },
        "& .delete-btn" : {
            backgroundColor: 'red',
            marginRight: "10px",
            borderRadius: "5px",
            color: "#fff",
            fontWeight: "600",
        },
        "& .delete-btn:hover"  : {
            backgroundColor: '#Dc5959',
        },
      },
      
      customPagination: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "30px !important",
        borderTop: "1px solid #f4f4f4",
        "@media (max-width: 574px)": {
          padding: "20px 30px !important",
        },
        "& .MuiInputBase-root.Mui-focused .MuiInputBase-input": {
          borderColor: "#f4f4f4",
        },
        "&.MuiTablePagination-root": {
          "& .MuiTablePagination-toolbar": {
            padding: 0,
            "& .MuiTablePagination-caption": {
              fontSize: "16px",
              fontWeight: "500",
              "@media (max-width: 574px)": {
                fontSize: "14px",
              },
            },
            "& .MuiTablePagination-selectRoot": {
              "@media (max-width: 574px)": {
                marginRight: "20px",
              },
              "& .MuiSelect-select.MuiSelect-select": {
                width: "80px",
                height: "45px",
                padding: "0 20px 0 0px !important",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "500",
                borderRadius: "6px",
                "@media (max-width: 574px)": {
                  height: "40px",
                },
              },
              "& .MuiSelect-icon": {
                top: "calc(50% - 13px)",
                right: "6px",
              },
            },
          },
        },
        "& .MuiTablePagination-actions": {
          "& .MuiIconButton-root": {
            "@media (max-width: 574px)": {
              padding: "5px",
            },
          },
        },
      },
      customPaginationMenuItem: {
        "&:hover": {
          backgroundColor: "rgba(98, 85, 165, 0.2)",
        },
        "&.MuiListItem-root.Mui-selected": {
          color: "#fff",
          backgroundColor: "rgba(98, 85, 165, 1)",
        },
      },
}));

export {userTableStyle};