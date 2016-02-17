System.register(['angular2/core', 'angular2/common', 'ng2-bootstrap/ng2-bootstrap', 'ng2-table/ng2-table', './table-data'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, ng2_bootstrap_1, ng2_table_1, table_data_1;
    var template, TableDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (ng2_table_1_1) {
                ng2_table_1 = ng2_table_1_1;
            },
            function (table_data_1_1) {
                table_data_1 = table_data_1_1;
            }],
        execute: function() {
            // webpack html imports
            template = require('./table-demo.html');
            TableDemo = (function () {
                function TableDemo() {
                    this.rows = [];
                    this.columns = [
                        { title: 'Name', name: 'name' },
                        { title: 'Position', name: 'position', sort: false },
                        { title: 'Office', name: 'office', sort: 'asc' },
                        { title: 'Extn.', name: 'ext', sort: 'desc' },
                        { title: 'Start date', name: 'startDate' },
                        { title: 'Salary', name: 'salary' }
                    ];
                    this.page = 1;
                    this.itemsPerPage = 10;
                    this.maxSize = 5;
                    this.numPages = 1;
                    this.length = 0;
                    this.config = {
                        paging: true,
                        sorting: { columns: [] },
                        filtering: { filterString: '', columnName: 'position' }
                    };
                    this.data = table_data_1.TableData;
                    this.length = this.data.length;
                }
                TableDemo.prototype.ngOnInit = function () {
                    this.onChangeTable(this.config, null);
                };
                TableDemo.prototype.changePage = function (page, data) {
                    if (data === void 0) { data = this.data; }
                    console.log(page);
                    var start = (page.page - 1) * page.itemsPerPage;
                    var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
                    return data.slice(start, end);
                };
                TableDemo.prototype.changeSort = function (data, config) {
                    var _this = this;
                    if (!config.sorting) {
                        return data;
                    }
                    // simple sorting
                    return data.sort(function (previous, current) {
                        var columns = _this.config.sorting.columns || [];
                        for (var i = 0; i < columns.length; i++) {
                            var columnName = columns[i].name;
                            if (previous[columnName] > current[columnName]) {
                                return columns[i].sort === 'desc' ? -1 : 1;
                            }
                            if (previous[columnName] < current[columnName]) {
                                return columns[i].sort === 'asc' ? -1 : 1;
                            }
                        }
                        return 0;
                    });
                };
                TableDemo.prototype.changeFilter = function (data, config) {
                    var _this = this;
                    if (!config.filtering) {
                        return data;
                    }
                    var filteredData = data.filter(function (item) {
                        return item[config.filtering.columnName].match(_this.config.filtering.filterString);
                    });
                    return filteredData;
                };
                TableDemo.prototype.onChangeTable = function (config, page) {
                    if (page === void 0) { page = config.paging; }
                    if (config.filtering) {
                        Object.assign(this.config.filtering, config.filtering);
                    }
                    if (config.sorting) {
                        Object.assign(this.config.sorting, config.sorting);
                    }
                    var filteredData = this.changeFilter(this.data, this.config);
                    var sortedData = this.changeSort(filteredData, this.config);
                    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
                    this.length = sortedData.length;
                };
                TableDemo = __decorate([
                    core_1.Component({
                        selector: 'table-demo',
                        template: template,
                        directives: [ng2_table_1.NG_TABLE_DIRECTIVES, ng2_bootstrap_1.PAGINATION_DIRECTIVES, common_1.NgClass, common_1.NgIf, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TableDemo);
                return TableDemo;
            })();
            exports_1("TableDemo", TableDemo);
        }
    }
});
//# sourceMappingURL=table-demo.js.map