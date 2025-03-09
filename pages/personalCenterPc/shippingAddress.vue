<template>
    <div class="flex-[1] rounded-[10px] p-[20px] overflow-hideen min-h-[380px] bg-[#fcfbf9]">
        <div class="font-bold relative">
            <span class="text-[24px]">收货地址</span>

            <div class="absolute right-0 bottom-0 flex items-center text-[#485FDE]">
                <!-- <img src="/image/Group 54@2x.png" class="w-[18px]" /> -->
                <span class="font-bold">+</span>
                <span class="ml-[5px] cursor-pointer">新增收货地址</span>
            </div>
        </div>
        <el-table class="cutom-table mt-[20px]" :data="tableData">
            <el-table-column prop="date" label="收货人" />
            <el-table-column prop="name" label="收货地址" />
            <el-table-column prop="name" label="联系方式" />
            <el-table-column prop="name" label="操作" width="200px">
                <template #default="{ row }">
                    <div class="flex items-center whitespace-nowrap">
                        <span class="mr-[20px] cursor-pointer text-[#485FDE]">编辑</span>
                        <span class="mr-[40px] cursor-pointer text-[#FF2F2F]">删除</span>
                        <button class="border-[1px] border-solid border-[#485FDE] text-[#485FDE] bg-[#f6f7fd] px-[5px] rounded-[4px]">
                            默认地址
                        </button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">
const tableData = [
    {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
];
</script>

<style lang="scss" scoped>
.cutom-table {
    // border-bottom: solid;
    // border-right: solid;
    // border: 1px solid #f5f1ec;
    --el-table-border: 1px solid #f5f1ec;
    // border-top-left-radius: 4px;
    // border-top-right-radius: 4px;
    --el-table-tr-bg-color: #fcfbf9;
    :deep(.el-table__header-wrapper) {
        --el-table-header-bg-color: #f5f1ec;
        border-radius: 4px !important;
        // box-sizing: content-box;
        // overflow: hidden;
        & > .el-table__header {
            // border: 1px solid #d6d6d6;
        }
        .cell {
            font-weight: 500;
        }
    }
    :deep(.cell) {
        color: #131313;
        text-align: center;
    }
}
</style>
